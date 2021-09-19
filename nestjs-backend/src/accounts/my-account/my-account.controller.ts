import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../../auth/jwt-auth.guard';
import { TenantGuard } from './../../tenant/tenant.guard';
import { TenantService } from './../../tenant/tenant/tenant.service';

@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('my-account')
export class MyAccountController {
  constructor(private tenantService: TenantService) {}

  @Get()
  find() {
    return this.tenantService.tenant;
  }
}
