import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { VerifyInput } from "../auth/VerifyInput";
import { LoginInput } from "../auth/LoginInput";
import { LogoutInput } from "../auth/LogoutInput";
import { ManageRolesInput } from "../auth/ManageRolesInput";
import { RegisterInput } from "../auth/RegisterInput";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Post("/auth/login")
  @swagger.ApiOkResponse({
    type: LoginInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: VerifyInput
  ): Promise<LoginInput> {
        return this.service.Login(body);
      }

  @common.Post("/auth/logout")
  @swagger.ApiOkResponse({
    type: LogoutInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Logout(
    @common.Body()
    body: VerifyInput
  ): Promise<LogoutInput> {
        return this.service.Logout(body);
      }

  @common.Post("/auth/roles")
  @swagger.ApiOkResponse({
    type: ManageRolesInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageRoles(
    @common.Body()
    body: VerifyInput
  ): Promise<ManageRolesInput> {
        return this.service.ManageRoles(body);
      }

  @common.Post("/auth/register")
  @swagger.ApiOkResponse({
    type: RegisterInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Register(
    @common.Body()
    body: VerifyInput
  ): Promise<RegisterInput> {
        return this.service.Register(body);
      }

  @common.Post("/auth/verify")
  @swagger.ApiOkResponse({
    type: VerifyInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Verify(
    @common.Body()
    body: VerifyInput
  ): Promise<VerifyInput> {
        return this.service.Verify(body);
      }
}
