"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePatientDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Patients first name only',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Patients last name only',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Patients id card',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "idCard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'Patients born date',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreatePatientDto.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Patients contact number',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "contactNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Patients email',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "email", void 0);
exports.CreatePatientDto = CreatePatientDto;
//# sourceMappingURL=create-patient.dto.js.map