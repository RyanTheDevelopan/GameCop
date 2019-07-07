"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class diceroll {
    constructor() {
        this._command = "diceroll";
    }
    help() {
        return "Roll a die";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var roll = Math.floor(Math.random() * 6) + 1;
        msgObject.channel.send(`Congrats ${msgObject.author.toString()}, you rolled a ${roll}!`);
    }
}
exports.default = diceroll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljZXJvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZGljZXJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixRQUFRO0lBQTdCO1FBRXFCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUFpQnRDLENBQUM7SUFkRCxJQUFJO1FBRUEsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUM3RixDQUFDO0NBQ0o7QUFuQkwsMkJBbUJLIn0=