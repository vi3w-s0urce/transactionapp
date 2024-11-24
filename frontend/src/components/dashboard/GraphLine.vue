<script setup lang="ts">
import { Line } from "vue-chartjs";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    type ScriptableContext,
    type ChartData,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const generateDays = (daysCount: number) => {
    const days: string[] = [];
    const formatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

    for (let i = daysCount - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        days.push(formatter.format(date));
    }

    return days;
};

const labels = generateDays(7);

const chartData = () => {
    return {
        labels,
        datasets: [
            {
                label: "Transactions",
                data: [40, 20, 12, 32, 25, 30, 19],
                borderColor: "rgba(16, 185, 129) ",
                backgroundColor: "#a7f3d0",
                pointRadius: 6,
                tension: 0.5,
                fill: {
                    target: "origin",
                    above: (context: ScriptableContext<"line">) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                        gradient.addColorStop(0, "rgba(16, 185, 129,0.5)");
                        gradient.addColorStop(1, "rgba(16, 185, 129,0)");
                        return gradient;
                    },
                },
            },
        ],
    };
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        filler: {
            propagate: true,
        },
    },
};
</script>

<template>
    <div>
        <Line
            id="lineChart"
            :options="chartOptions"
            :data="chartData() as ChartData<'line'>"
            style="position: relative; height: 300px !important; width: 100% !important"
        ></Line>
    </div>
</template>
