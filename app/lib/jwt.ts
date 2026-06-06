import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'dev-secret'

export function signToken(payload: object, opts = {}){
  return jwt.sign(payload as any, SECRET, { expiresIn: '7d', ...(opts as any) })
}

export function verifyToken(token: string){
  return jwt.verify(token, SECRET)
}
