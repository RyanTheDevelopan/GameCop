"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "teh-rules";
    }
    help() {
        return `The rules, obviously.`;
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete(0);
        msgObject.channel.send(`So! the rules, what are they? Well, these're the rules, shut up, and follow them.`);
        ;
        msgObject.channel.send(`**The Rules**:
Rule 1: No Major Cussing (This includes doing it a lot. It's fine if you do it like once.) Flamey: Fuck you
Rule 2: No rude/offensive comments.
Rule 3: Post in the correct channels.
Rule 4: Don't @everyone. Me, Flamey, and the admins are excluded from this.
Rule 5: If there is a problem, ping either Chamey or Ryan. Don't go pinging some random folk who are trying to enjoy their evening meal. However, if it's a small problem and the Creator isn't online try to take care of it yourself. 'Sides, it isn't that hard.
Rule 6: Hey, don't bully. Everyone hates a bully. *Flamey doesn't know what to do with his "life" anymore*
Rule 7: No Role Abuse: Don't abuse your roles, 'cuz if you do, Imma remove
that role and give you a warning
Rule 8 (And the most important rule of all): No getting to 3 warnings: Don't get to 3 warnings, kids
'cuz if you do
*Eye glows blue*
**YOU'RE GONNA BE IN FOR A BAD TIME**`);
        ;
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVoLXJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3RlaC1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLFdBQVc7SUFBaEM7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQStCdkMsQ0FBQztJQTVCRCxJQUFJO1FBRUEsT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBSXpFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUZBQW1GLENBQUMsQ0FBQztRQUFBLENBQUM7UUFDN0csU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7OztzQ0FZRyxDQUFDLENBQUM7UUFBQSxDQUFDO0lBQ2pDLENBQUM7Q0FDSjtBQWpDTCw4QkFpQ0sifQ==