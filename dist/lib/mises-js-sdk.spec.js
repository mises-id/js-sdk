"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const mises_js_sdk_1 = __importDefault(require("./mises-js-sdk"));
/**
 * MSdk test
 */
describe('MSdk test', () => {
    it('works if true is truthy', () => {
        expect(true).toBeTruthy();
    });
    it('MSdk is instantiable', () => __awaiter(void 0, void 0, void 0, function* () {
        const sdk = yield mises_js_sdk_1.default.newSdk();
        expect(sdk).toBeInstanceOf(mises_js_sdk_1.default);
    }));
});
//# sourceMappingURL=mises-js-sdk.spec.js.map