import { PrismaClient } from '@prisma/client'
import { Handler } from '@netlify/functions'

const prisma = new PrismaClient()

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    }
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}')

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Name, email, and message are required',
        }),
      }
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify(contact),
    }
  } catch (error) {
    console.error('Database error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    }
  } finally {
    await prisma.$disconnect()
  }
}

export { handler } 