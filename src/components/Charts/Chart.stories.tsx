import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@mantine/core';
import { Chart } from '.';

const meta: Meta<typeof Chart> = {
  title: 'Components/Chart',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Chart>;

const series = [
  {
    name: 'Sales',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
  {
    name: 'Products',
    data: [10, 30, 55, 20, 39, 53, 67, 40, 102],
  },
];

const xAxis = {
  categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
};

export const Default: Story = {
  render: ({ stacked, showXGrid, showYGrid }) => (
    <Card>
      <Chart
        series={series}
        xaxis={xAxis}
        stroke={{
          curve: 'smooth',
        }}
        stacked={stacked}
        type="area"
        width={600}
        height={400}
        showXGrid={showXGrid}
        showYGrid={showYGrid}
      />
    </Card>
  ),
  args: {
    stacked: false,
    showXGrid: false,
    showYGrid: true,
  },
};

export const Line: Story = {
  render: ({ stacked }) => (
    <Card>
      <Chart
        series={series}
        xaxis={xAxis}
        stroke={{
          curve: 'smooth',
        }}
        stacked={stacked}
        type="line"
        width={600}
        height={400}
      />
    </Card>
  ),
  args: {
    stacked: false,
  },
};

export const Column: Story = {
  render: ({ stacked }) => (
    <Card>
      <Chart
        series={series}
        xaxis={xAxis}
        stroke={{
          curve: 'smooth',
        }}
        stacked={stacked}
        type="column"
        width={600}
        height={400}
      />
    </Card>
  ),
  args: {
    stacked: false,
  },
};

export const Bar: Story = {
  render: ({ stacked }) => (
    <Card>
      <Chart
        series={series}
        xaxis={xAxis}
        stroke={{
          curve: 'smooth',
        }}
        stacked={stacked}
        type="bar"
        width={600}
        height={400}
      />
    </Card>
  ),
  args: {
    stacked: false,
  },
};

const circleSeries = [44, 55, 41, 17, 15];
const circleLabels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];

export const Pie: Story = {
  name: 'Pie / Donut',
  render: ({ type }) => (
    <Card>
      <Chart
        series={circleSeries}
        labels={circleLabels}
        type={type}
        width={600}
        height={400}
        dataLabels={{
          enabled: true,
        }}
        legend={{
          position: 'right',
        }}
      />
    </Card>
  ),
  args: {
    type: 'pie',
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['pie', 'donut'],
    },
  },
};

export const RadialBar: Story = {
  render: () => (
    <Card>
      <Chart
        series={circleSeries}
        labels={circleLabels}
        type="radialBar"
        width={600}
        height={400}
        plotOptions={{
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                formatter() {
                  return '249';
                },
              },
            },
          },
        }}
        legend={{
          position: 'right',
        }}
      />
    </Card>
  ),
};

const generateSequentialData = (
  length: number,
  { min, max }: { min: number; max: number },
) =>
  new Array(length).fill(0).map((_, i) => ({
    x: `W${i + 1}`,
    y: Math.floor(Math.random() * (max - min + 1)) + min,
  }));

export const Heatmap: Story = {
  render: () => (
    <Card>
      <Chart
        series={new Array(9).fill(0).map((_, i) => ({
          name: `Metric ${i + 1}`,
          data: generateSequentialData(18, { min: 0, max: 60 }),
        }))}
        type="heatmap"
        legend={{
          position: 'bottom',
          horizontalAlign: 'center',
        }}
        width={600}
        height={400}
      />
    </Card>
  ),
};

export const Scatter: Story = {
  render: () => (
    <Card>
      <Chart
        series={[
          {
            name: 'SAMPLE A',
            data: [
              [16.4, 5.4],
              [21.7, 2],
              [25.4, 3],
              [19, 2],
              [10.9, 1],
              [13.6, 3.2],
              [10.9, 7.4],
              [10.9, 0],
              [10.9, 8.2],
              [16.4, 0],
              [16.4, 1.8],
              [13.6, 0.3],
              [13.6, 0],
              [29.9, 0],
              [27.1, 2.3],
              [16.4, 0],
              [13.6, 3.7],
              [10.9, 5.2],
              [16.4, 6.5],
              [10.9, 0],
            ],
          },
          {
            name: 'SAMPLE B',
            data: [
              [36.4, 13.4],
              [1.7, 11],
              [5.4, 8],
              [9, 17],
              [1.9, 4],
              [3.6, 12.2],
              [1.9, 14.4],
              [1.9, 9],
              [1.9, 13.2],
              [1.4, 7],
              [6.4, 8.8],
              [3.6, 4.3],
              [1.6, 10],
              [9.9, 2],
              [7.1, 15],
            ],
          },
          {
            name: 'SAMPLE C',
            data: [
              [21.7, 3],
              [23.6, 3.5],
              [24.6, 3],
              [29.9, 3],
              [21.7, 20],
              [23, 2],
              [10.9, 3],
              [28, 4],
              [27.1, 0.3],
              [16.4, 4],
              [13.6, 0],
              [19, 5],
              [22.4, 3],
              [24.5, 3],
              [32.6, 3],
              [27.1, 4],
              [29.6, 6],
              [31.6, 8],
              [21.6, 5],
              [20.9, 4],
              [22.4, 0],
            ],
          },
        ]}
        type="scatter"
        legend={{
          position: 'bottom',
          horizontalAlign: 'center',
        }}
        width={600}
        height={400}
      />
    </Card>
  ),
};

export const CandleStick: Story = {
  render: () => (
    <Card>
      <Chart
        series={[
          {
            data: [
              {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33],
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11],
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65],
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24],
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47],
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31],
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02],
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02],
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01],
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02],
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91],
              },
            ],
          },
        ]}
        type="candlestick"
        xaxis={{
          type: 'datetime',
        }}
        yaxis={{
          tooltip: {
            enabled: true,
          },
        }}
        width={600}
        height={400}
      />
    </Card>
  ),
};
