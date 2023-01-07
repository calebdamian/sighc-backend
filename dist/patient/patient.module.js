"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entry_entity_1 = require("../entry/entities/entry.entity");
const user_entity_1 = require("../users/entities/user.entity");
const users_module_1 = require("../users/users.module");
const patient_entity_1 = require("./entity/patient.entity");
const patient_controller_1 = require("./patient.controller");
const patient_service_1 = require("./patient.service");
let PatientModule = class PatientModule {
};
PatientModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([patient_entity_1.PatientEntity, user_entity_1.UserEntity, entry_entity_1.EntryEntity]),
            users_module_1.UsersModule,
        ],
        controllers: [patient_controller_1.PatientController],
        providers: [patient_service_1.PatientService],
        exports: [patient_service_1.PatientService],
    })
], PatientModule);
exports.PatientModule = PatientModule;
//# sourceMappingURL=patient.module.js.map