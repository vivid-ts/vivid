import { ActionIcon, Button, Card, Image, Text } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowUp, Money, Tag } from '@phosphor-icons/react';
import { Chart } from '../Charts';

const meta: Meta = {
  title: 'Components/Card',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Card>
      <Card.Section className="mb-4">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Text size="lg" className="font-semibold">
        Hello World!
      </Text>

      <Text size="sm" className="mb-4">
        This is very cool example (I think...)
      </Text>

      <Button>Thing</Button>
    </Card>
  ),
};

export const Graph: StoryObj = {
  render: () => (
    <Card>
      <section>
        <ActionIcon color="green" radius="xl" className="mb-2">
          <Money size={20} weight="fill" />
        </ActionIcon>

        <Text size="xl" className="font-bold dark:text-zinc-200">
          $ 12k
        </Text>

        <Text size="sm" className="mb-4">
          Revenue generated
        </Text>
      </section>

      <Card.Section>
        <Chart
          className="-mt-20"
          width="100%"
          height="100%"
          series={[
            {
              name: 'Sales',
              data: [30, 20, 50, 40],
            },
          ]}
          chart={{
            animations: {
              enabled: false,
            },
            zoom: {
              enabled: false,
            },
          }}
          type="area"
          fullSize
          grid={{
            show: false,
          }}
          xaxis={{
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
            labels: {
              show: false,
            },
          }}
          yaxis={{
            tooltip: {
              enabled: false,
            },
            labels: {
              show: false,
            },
          }}
          tooltip={{
            enabled: false,
          }}
        />
      </Card.Section>
    </Card>
  ),
};

export const Stats: StoryObj = {
  render: () => (
    <Card>
      <section className="flex gap-4 items-center mb-2">
        <ActionIcon color="orange" radius="xl">
          <Tag size={20} weight="fill" />
        </ActionIcon>

        <section>
          <Text size="xl" className="font-bold dark:text-zinc-200">
            Daily sales
          </Text>

          <section className="text-green-500 dark:text-green-400 flex items-center gap-1">
            <ArrowUp weight="fill" />
            <Text size="sm" className="font-medium">
              +50%
            </Text>
          </section>
        </section>
      </section>

      <Card.Section>
        <Chart
          className="-mt-16"
          width="100%"
          height="100%"
          series={[
            {
              name: 'Sales',
              data: [30, 20, 50, 40],
            },
          ]}
          chart={{
            animations: {
              enabled: false,
            },
            zoom: {
              enabled: false,
            },
          }}
          type="area"
          fullSize
          grid={{
            show: false,
          }}
          xaxis={{
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
            labels: {
              show: false,
            },
          }}
          yaxis={{
            tooltip: {
              enabled: false,
            },
            labels: {
              show: false,
            },
          }}
          tooltip={{
            enabled: false,
          }}
        />
      </Card.Section>
    </Card>
  ),
};
