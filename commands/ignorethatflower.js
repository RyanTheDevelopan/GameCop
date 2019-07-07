"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "ignoretheflower";
    }
    help() {
        return `The fifth part of "#greetings"`;
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`... 
*Whispers to the member* Ignore the flower.
*Back in normal tone & such* Anyway, so we highly advice you to read the rules channel. So, see ya (I guess)`);
        ;
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWdub3JldGhhdGZsb3dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9pZ25vcmV0aGF0Zmxvd2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsaUJBQWlCLENBQUE7SUFvQjdDLENBQUM7SUFqQkQsSUFBSTtRQUVBLE9BQU8sZ0NBQWdDLENBQUM7SUFDNUMsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUl6RSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzs2R0FFMEUsQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUN4RyxDQUFDO0NBQ0o7QUF0QkwsOEJBc0JLIn0=