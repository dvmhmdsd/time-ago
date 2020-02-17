const Component = require(COMPONENT_CLASS_PATH);

class TimeAgoComponent extends Component {}

module.exports = {
    selector: 'flk-time-ago',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TimeAgoComponent,
    isUnique: false,
    component: 'TimeAgo',
    htmlFile: __dirname + '/../../flk-time-ago.component.html',
};