"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "greetings";
    }
    help() {
        return `The third part of "#greetings"`;
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`... 
            Well, this is the server for us two bots, Ryan The Botan, and Flamey The Flower. 
            Well, it isn't quite complete yet, but we would like it for you to stick around.`);
        ;
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2dyZWV0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLFdBQVc7SUFBaEM7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQW9CdkMsQ0FBQztJQWpCRCxJQUFJO1FBRUEsT0FBTyxnQ0FBZ0MsQ0FBQztJQUM1QyxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBSXpFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7OzZGQUUwRCxDQUFDLENBQUM7UUFBQSxDQUFDO0lBQ3hGLENBQUM7Q0FDSjtBQXRCTCw4QkFzQksifQ==