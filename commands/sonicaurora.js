"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sonicaurora {
    constructor() {
        this._command = "sonicaurora";
    }
    help() {
        return "The downloads of the versions of Sonic Aurora that could currently be found. RIP Aurora and Qunoxic";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`Ok, so what IS Sonic Aurora? Well, it's a fan-game made by Qunoxic, which attempted to expand the concept of Sonic Network Land, and make an actual story.
It promised an actual **Single Player** mode, and additions and fixes to the **Online** mode. But, well, it ultimately got scrapped and the creator left Discord, with the server being deleted too. Anyway, here's the description of it's GameJolt Page:`);
    }
}
exports.default = sonicaurora;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uaWNhdXJvcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc29uaWNhdXJvcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFrQnpDLENBQUM7SUFmRCxJQUFJO1FBRUEsT0FBTyxxR0FBcUcsQ0FBQztJQUNqSCxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7MlBBQ3dOLENBQUMsQ0FBQztJQUNyUCxDQUFDO0NBQ0o7QUFwQkwsOEJBb0JLIn0=