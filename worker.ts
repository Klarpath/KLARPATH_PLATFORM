#!/usr/bin/env node

/**
 * Email Queue Worker Process
 * 
 * Run this as a separate process to handle background email jobs:
 * npm run worker
 * 
 * Or deploy as a dedicated container/service
 */

import { getEmailWorkerInstance } from './app/lib/queue'

const emailWorker = getEmailWorkerInstance()

console.log('🚀 Email Worker Starting...')
console.log(`Connected to Redis at: ${process.env.REDIS_URL || 'redis://127.0.0.1:6379'}`)

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  console.log('📤 SIGTERM received. Shutting down gracefully...')
  await emailWorker.close()
  process.exit(0)
})

process.on('SIGINT', async () => {
  console.log('📤 SIGINT received. Shutting down gracefully...')
  await emailWorker.close()
  process.exit(0)
})

console.log('✅ Email Worker is running and listening for jobs...')
