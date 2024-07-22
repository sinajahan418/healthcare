
import { sign , verify} from "jsonwebtoken";

// import { sign } from "crypto";

const generateAccessToken = (data: any) => {
  const token = sign({ ...data }, process.env.NEXT_PUBLIC_AccessTokenSecretKey, {
    expiresIn: "60d",
  });
  return token;
};

const verifyAccessToken = (token: any) => {
    try {
      const tokenPayload = verify(token, process.env.NEXT_PUBLIC_AccessTokenSecretKey);
      return tokenPayload;
    } catch (err) {
      console.log("Verify Access Token Error ->", err);
      return false;
    }
  };

export { generateAccessToken  , verifyAccessToken};
