import { IsNotEmpty, MaxLength, IsString, IsIn } from 'class-validator';
import { ReportStatus } from './../entities/report.entity';
import { ReportStatusList } from './../entities/report.entity';

export class UpdateReportDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  file_url: string;

  @IsIn(ReportStatusList)
  @IsNotEmpty()
  status: ReportStatus;
}
