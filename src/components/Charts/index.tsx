import { useMantineColorScheme } from '@mantine/core';
import type { ApexOptions } from 'apexcharts';
import ApexChart, { type Props as ApexChartProps } from 'react-apexcharts';
import { themeColors } from '@/lib/theme/themeColors';

export interface ChartProps extends ApexOptions {
  width?: number;
  height?: number;
  type: NonNullable<ApexChartProps['type']> | 'column';
  series: NonNullable<ApexChartProps['series']>;
  legend?: NonNullable<ApexOptions['legend']>;
  curved?: boolean;
  stacked?: boolean;
  showToolbar?: boolean;
  showXGrid?: boolean;
  showYGrid?: boolean;
}

export const Chart = ({
  width,
  height,
  type = 'area',
  series,
  curved = true,
  stacked = false,
  showToolbar = false,
  showXGrid = false,
  showYGrid = true,
  ...options
}: ChartProps) => {
  const { colorScheme } = useMantineColorScheme();

  const combinedOptions: ApexOptions = {
    ...options,

    theme: {
      mode: colorScheme,
      ...options.theme,
    },

    chart: {
      fontFamily: 'Inter, sans-serif',
      background: 'transparent',
      foreColor:
        colorScheme === 'dark' ? themeColors.base[2] : themeColors.accent[7],
      stacked,
      ...options.chart,
      toolbar: {
        show: showToolbar,
        offsetX: -16,
        ...options.chart?.toolbar,
        tools: {
          download: false,
          ...options.chart?.toolbar?.tools,
        },
      },
    },

    grid: {
      borderColor:
        colorScheme === 'dark' ? themeColors.base[5] : themeColors.accent[2],
      ...options.grid,
      xaxis: {
        lines: {
          show: showXGrid,
          ...options.grid?.xaxis?.lines,
        },
      },
      yaxis: {
        lines: {
          show: showYGrid,
          ...options.grid?.yaxis?.lines,
        },
      },
    },

    dataLabels: {
      enabled: false,
      ...options.dataLabels,
      dropShadow: {
        enabled: false,
        ...options.dataLabels?.dropShadow,
      },
    },

    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontWeight: 500,
      ...options.legend,
      markers: {
        radius: 3,
        offsetX: 0,
        offsetY: 0,
        ...options.legend?.markers,
      },

      labels: {
        colors:
          colorScheme === 'dark' ? themeColors.base[0] : themeColors.base[4],
        ...options.legend?.labels,
      },
    },

    stroke: {
      curve: curved ? 'smooth' : 'straight',
      ...options.stroke,
    },

    plotOptions: {
      ...options.plotOptions,
      // Bar chart options
      bar: {
        horizontal: type === 'bar',
        ...options.plotOptions?.bar,
      },
      // Radial chart options
      radialBar: {
        ...options.plotOptions?.radialBar,
        hollow: {
          background: 'transparent',
          ...options.plotOptions?.radialBar?.hollow,
        },
        track: {
          background:
            colorScheme === 'dark'
              ? themeColors.base[5]
              : themeColors.accent[2],
          ...options.plotOptions?.radialBar?.track,
        },
      },
      // Heatmap chart options
      heatmap: {
        ...options.plotOptions?.heatmap,
        colorScale: {
          ranges: new Array(6).fill(0).map((_, index) => {
            const from = index * 10;
            const to = from + 10;

            return {
              from,
              to,
              color: themeColors.primary[index],
              name: `${from}-${to}`,
            };
          }),
          ...options.plotOptions?.heatmap?.colorScale,
        },
      },
    },
  };

  // eslint-disable-next-line no-param-reassign
  if (type === 'column') type = 'bar';

  return (
    <ApexChart
      series={series}
      type={type}
      width={width}
      height={height}
      options={combinedOptions}
    />
  );
};
