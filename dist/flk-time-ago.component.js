class TimeAgo {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.displayedTime = '';
        const timeTypes = [
            ['ثانية', 'ثانيتين', '%s ثوان', '%s ثانية'], // Seconds
            ['دقيقة', 'دقيقتين', '%s دقائق', '%s دقيقة'], // Minutes
            ['ساعة', 'ساعتين', '%s ساعات', '%s ساعة'], // Hours
            ['يوم', 'يومين', '%s أيام', '%s يوماً'], // Days
            ['أسبوع', 'أسبوعين', '%s أسابيع', '%s أسبوعاً'], // Weeks
            ['شهر', 'شهرين', '%s أشهر', '%s شهراً'], // Months
            ['عام', 'عامين', '%s أعوام', '%s عاماً'], // Years
        ];

        function formatTime(type, n) {
            if (n < 3) return timeTypes[type][n - 1];
            if (n >= 3 && n <= 10) return timeTypes[type][2];
            return timeTypes[type][3];
        }

        function locale(number, index) {
            if (index === 0) {
                return ['منذ لحظات', 'بعد لحظات'];
            }
            
            const timeStr = formatTime(Math.floor(index / 2), number);
            return ['منذ' + ' ' + timeStr, 'بعد' + ' ' + timeStr];
        };

        // user inputs
        this.timestamp = null;

        timeago.register('ar', locale);
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.timeFormat = this.inputs.getProp("time-format");

        this.timeInSeconds = this.inputs.getOption("timestamp");
        this.displayedTime = timeago.format(this.timeInSeconds * 1000, Config.get('app.localeCode'));

        setInterval(() => {
            this.timeInSeconds -= 60;
            this.displayedTime = timeago.format(this.timeInSeconds * 1000, Config.get('app.localeCode'));
        }, 60000);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}