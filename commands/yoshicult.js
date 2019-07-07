"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class yoshicult {
    constructor() {
        this._command = "yoshicult";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`Well, so this is a Yoshi Cult
Here you get to worship Yoshis if you do want a Yoshi religion (for some reason)
I just don't feel like talking much about this now so here's the invite:
https://discord.gg/XpMEtS8`);
    }
}
exports.default = yoshicult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW9zaGljdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3lvc2hpY3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLFNBQVM7SUFBOUI7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQW9CdkMsQ0FBQztJQWpCRCxJQUFJO1FBRUEsT0FBTyw0RUFBNEUsQ0FBQztJQUN4RixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7OzsyQkFHUixDQUFDLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBdEJMLDRCQXNCSyJ9