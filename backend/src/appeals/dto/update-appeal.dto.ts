import { PartialType } from '@nestjs/mapped-types';
import { CreateAppealDto } from './create-appeal.dto';

export class UpdateAppealDto extends PartialType(CreateAppealDto) {}
