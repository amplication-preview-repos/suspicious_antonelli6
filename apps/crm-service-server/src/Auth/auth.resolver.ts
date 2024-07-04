import * as graphql from "@nestjs/graphql";
import { LoginInput } from "../auth/LoginInput";
import { LogoutInput } from "../auth/LogoutInput";
import { ManageRolesInput } from "../auth/ManageRolesInput";
import { RegisterInput } from "../auth/RegisterInput";
import { VerifyInput } from "../auth/VerifyInput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => LoginInput)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<LoginInput> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => LogoutInput)
  async Logout(
    @graphql.Args()
    args: LogoutInput
  ): Promise<LogoutInput> {
    return this.service.Logout(args);
  }

  @graphql.Mutation(() => ManageRolesInput)
  async ManageRoles(
    @graphql.Args()
    args: ManageRolesInput
  ): Promise<ManageRolesInput> {
    return this.service.ManageRoles(args);
  }

  @graphql.Mutation(() => RegisterInput)
  async Register(
    @graphql.Args()
    args: RegisterInput
  ): Promise<RegisterInput> {
    return this.service.Register(args);
  }

  @graphql.Mutation(() => VerifyInput)
  async Verify(
    @graphql.Args()
    args: VerifyInput
  ): Promise<VerifyInput> {
    return this.service.Verify(args);
  }
}
