export interface JWTDecodedUser {
  _id: string;
  email: string;
}

export interface JTWEncodedUser {
  sub: JWTDecodedUser['_id'];
  email: JWTDecodedUser['email'];
}
