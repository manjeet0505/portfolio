import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    }
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}')

    // Validate input fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' }),
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      }
    }

    // Create contact entry in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully', contact }),
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
} 