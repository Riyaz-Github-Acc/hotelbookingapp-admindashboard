// Recharts
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
} from "recharts";

// CSS
import styles from "./Chart.module.scss";

const data = [
    { name: "January", Total: 12000 },
    { name: "February", Total: 21000 },
    { name: "March", Total: 8000 },
    { name: "April", Total: 16000 },
    { name: "May", Total: 9000 },
    { name: "June", Total: 17000 },
];

const Chart = ({ aspect, title }) => {
    return (
        <div className={styles.chart}>
            <div className={styles.title}>
                <h3>{title}</h3>
            </div>
            <ResponsiveContainer width="100%" aspect={aspect} title={title}>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    {/* <YAxis /> */}
                    <CartesianGrid
                        strokeDasharray="3 3"
                        className="chartGrid"
                    />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
