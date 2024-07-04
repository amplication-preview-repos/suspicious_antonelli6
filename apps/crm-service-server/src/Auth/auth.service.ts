import { Injectable } from "@nestjs/common";
import { LoginInput } from "../auth/LoginInput";
import { LogoutInput } from "../auth/LogoutInput";
import { ManageRolesInput } from "../auth/ManageRolesInput";
import { RegisterInput } from "../auth/RegisterInput";
import { VerifyInput } from "../auth/VerifyInput";

@Injectable()
export class AuthService {
  constructor() {}
  async Login(args: LoginInput): Promise<LoginInput> {
    throw new Error("Not implemented");
  }
  async Logout(args: LogoutInput): Promise<LogoutInput> {
    throw new Error("Not implemented");
  }
  async ManageRoles(args: ManageRolesInput): Promise<ManageRolesInput> {
    throw new Error("Not implemented");
  }
  async Register(args: RegisterInput): Promise<RegisterInput> {
    throw new Error("Not implemented");
  }
  async Verify(args: VerifyInput): Promise<VerifyInput> {
    throw new Error("Not implemented");
  }
}
