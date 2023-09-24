"use client";
import Layout from "@/components/Layout";
import {PieChart, Pie} from "recharts";

export default function Dashboard(){
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    return (
        <Layout>
            <h1>Dashboard works</h1>
            <PieChart width={730} height={250}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>
        </Layout>
    )
}