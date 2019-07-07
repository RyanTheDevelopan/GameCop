"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class askut {
    constructor() {
        this._command = "askut";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`Hey, everyone! Here's a server that's been recently passed over to me. This is a server where you could:
            * ASK Undertale/Deltarune/AU/Custom characters 
            * Just chat 
            * Roleplay with other members
This server also has a LOVE ranking system. Even though it originally was from the Flamey bot, now it's being used by MEE6 (for the meanwhile)
Anyway, that's all I'll say for this server, and, see ya there!
Invite Link: 
https://discord.gg/AjQKhqF`);
    }
}
exports.default = askut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNrdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvYXNrdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUF3Qm5DLENBQUM7SUFyQkQsSUFBSTtRQUVBLE9BQU8sNEVBQTRFLENBQUM7SUFDeEYsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzs7Ozs7OzJCQU9SLENBQUMsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUExQkwsd0JBMEJLIn0=