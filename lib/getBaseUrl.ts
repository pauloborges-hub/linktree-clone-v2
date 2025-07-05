export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    // Priority order for production URLs
    // 1. Custom domain (recommended for production)
    if (process.env.NEXT_PUBLIC_APP_URL) {
      return process.env.NEXT_PUBLIC_APP_URL
    }

    // 2. Vercel URL (auto-generated)
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`
    }

    // 3. Vercel project URL (more reliable)
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    }

    // 4. Fallback
    throw new Error('No production URL configured. Please set NEXT_PUBLIC_APP_URL environment variable.')
  }

  // Defaults to localhost:3000 for development
  return 'http://localhost:3000'
}