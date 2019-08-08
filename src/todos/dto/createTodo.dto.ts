import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiModelProperty()
    readonly text: string;

    @ApiModelProperty()
    readonly completed: boolean;
}
