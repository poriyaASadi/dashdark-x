import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import CardBox from '../components/small_componente/CardBox';


import { LineChart } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';

// icon import 
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const revenueData = [5, 10, 20, 50, 80, 125.2, 140, 180, 200, 215, 225, 235]; // Revenue (بنفش)
const expensesData = [30, 25, 15, 20, 60, 40, 100, 150, 100, 70, 50, 80]; // Expenses (آبی)
const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const getTooltipContent = (series, value, point) => {
  if (series.id === 'revenue' && point.dataIndex === 5) {
    return (
      <Box sx={{ p: 1, backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', borderRadius: '8px' }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          ${value.toFixed(1)}k
        </Typography>
        <Typography variant="caption">June 21, 2023</Typography>
      </Box>
    );
  }
  // Tooltip عمومی برای سایر نقاط
  return (
    <Box sx={{ p: 1, backgroundColor: 'rgba(0,0,0,0.8)', color: 'white', borderRadius: '8px' }}>
      <Typography variant="body2">{series.label}: ${value.toFixed(1)}k</Typography>
      <Typography variant="caption">{xAxisLabels[point.dataIndex]}</Typography>
    </Box>
  );
};
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4500, 2380, 4350];
const pvData = [3000, 5500, 2000, 5050, 1020, 4305, 5893, 3200, 5493, 1121];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
  'Page H',
  'Page I',
  'Page J',
];

const pData = [2100, 2200, 2100, 2400, 2150, 2500, 2400];
const xxLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];





export default function Home() {
  const [DataHeader, setDataHeader] = useState([
    {
      title: 'Welcome back, poriya',
      description: 'Measure your advertising ROI and report website traffic.'
    },
    {
      title: 'Reports overview',
      description: ''
    }
  ]);
  return (
    <div>
      <section className='flex bg-Color800'>
        <SideBar />
        <main className='w-full'>
          <section className='w-full p-3 min-h-screen bg-Color800 text-Color200'>
            <Header isShowButton={true} dataValue={DataHeader[0]} />
            <ul className='flex items-center justify-center w-full  gap-x-3'>
              {[...Array(4)].map((_, index) => (
                <li key={index} className='w-full'>
                  <CardBox />
                </li>
              ))}
            </ul>
            <section className='mb-3'>
              <div className='bg-Color700 p-3 pr-0 mt-3 rounded-lg grid grid-cols-1 mobile:grid-cols-3'>
                <div style={{ borderRight: '1px solid #343b4f' }} className='col-span-1 mobile:col-span-2 *:text-white border-none p-3 pt-6  border-Color2 w-full h-full'>
                  <div>
                    <p>Total revenue</p>
                    <div className='flex items-center gap-x-2'>
                      <h2 className='flex items-center gap-x-2 text-5xl'>$240.8k</h2>
                      <span className='text-ColorGreen  flex  items-center'>28.8%<TrendingUpIcon /></span>
                    </div>
                  </div>
                  <LineChart

                    xAxis={[
                      {
                        data: xAxisLabels,
                        scaleType: 'band',
                        tickLabelStyle: { fill: 'rgba(255,255,255,0.7)' },
                        disableAxisLine: true,
                        disableTicks: true,
                      }
                    ]}
                    yAxis={[
                      {
                        scaleType: 'linear',
                        valueFormatter: (value) => `${value}K`,
                        tickLabelStyle: { fill: 'rgba(255,255,255,0.7)' },
                        tickInterval: 25,
                        disableAxisLine: true,
                        disableTicks: true,
                      }
                    ]}
                    series={[
                      {
                        data: revenueData,
                        showMark: false,
                        label: 'Revenue',
                        color: '#CB3CFF',
                        area: true,
                        valueFormatter: (value) => `$${value}K`,
                        curve: 'natural',
                        id: 'revenue',
                      },
                      {
                        data: expensesData,
                        showMark: false,
                        label: 'Expenses',
                        color: '#57c3ff',
                        area: true,
                        valueFormatter: (value) => `$${value}K`,
                        curve: 'natural',
                        id: 'expenses',
                      }
                    ]}
                    height={500}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    sx={{
                      '& .MuiLineElement-root': {
                        strokeWidth: 2
                      },
                      [`& .MuiAreaElement-series-revenue`]: {
                        fill: 'url(#revenueGradient)',
                        opacity: 0.4
                      },
                      [`& .MuiAreaElement-series-expenses`]: {
                        fill: 'url(#expensesGradient)',
                        opacity: 0.4
                      },
                      '& .MuiChartsAxis-line': {
                        stroke: 'none',
                        display: 'none'
                      },
                      '& .MuiChartsAxis-tick': {
                        stroke: 'none',
                        display: 'none'
                      },
                      '& .MuiChartsAxis-tickLabel': {
                        fill: 'rgba(255,255,255,0.7)',
                      },
                      '& .MuiChartsLegend-label': {
                        fill: 'white',
                      },
                      '& .MuiChartsLegend-root': {
                        fill: 'white',
                      },
                      '& .MuiChartsAxis-grid': {
                        stroke: 'rgba(255,255,255,0.1)',
                        strokeDasharray: '4 4',
                      },
                    }}
                    tooltip={{
                      trigger: 'item',
                      itemContent: ({ series, dataIndex, value }) => getTooltipContent(series, value, { dataIndex }),
                    }}
                  >
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#CB3CFF" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#CB3CFF" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#57c3ff" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#57c3ff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </div>
                <div className='grid  sm:grid-cols-2 mobile:grid-cols-1'>
                  <div className='p-3 sm:h-full mobile:h-fit flex flex-col justify-between'>
                    <div className='mb-1'>
                      <p>Total revenue</p>
                      <div className='flex items-center gap-x-2'>
                        <h2 className='flex items-center gap-x-2 text-4xl'>$240.8k</h2>
                        <span className='text-ColorGreen  flex  items-center'>28.8%<TrendingUpIcon /></span>
                      </div>
                    </div>
                    <div className='max-w-[400px]'>
                      <Box
                        sx={{
                          width: '100%',
                          height: 150,
                          '& .MuiBarElement-series-uv': {
                            width: '3px !important',
                            maxWidth: '3px !important',
                          },
                          '& .MuiBarElement-series-PV': {
                            width: '3px !important',
                            maxWidth: '3px !important',
                          },
                        }}
                      >
                        <ChartContainer
                          series={[
                            {
                              type: 'bar',
                              label: 'uv',
                              data: uData,
                              color: '#CB3CFF',
                              layoutOptions: {
                                barSize: 5, // 🔁 سعی در تنظیم اندازه بار
                                categoryGapRatio: 10,
                                valueGapRatio: 10,
                              },
                            },
                            {
                              type: 'bar',
                              label: 'PV',
                              data: pvData,
                              color: '#57c3ff',
                              layoutOptions: {
                                barSize: 4,
                                categoryGapRatio: 10,
                                valueGapRatio: 10,
                              },
                            },
                          ]}
                          xAxis={[{ scaleType: 'band', data: xLabels }]}
                          height={150}
                          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        >
                          <BarPlot />
                        </ChartContainer>
                      </Box>
                    </div>
                    <div className='flex items-center justify-between'>
                      <p className='text-Color400'>Last 12 months</p>
                      <Link to="/" className='text-Color1'>View report</Link>
                    </div>
                  </div>
                  <div className='hidden p-3 mt-4 sm:h-full mobile:h-fit sm:flex flex-col flex-justify-between' style={{ borderTop: '1px solid #343b4f' }}>
                    <div className='mb-1'>
                      <p>Total revenue</p>
                      <div className='flex items-center gap-x-2'>
                        <h2 className='flex items-center gap-x-2 text-4xl'>$240.8k</h2>
                        <span className='text-ColorGreen  flex  items-center'>28.8%<TrendingUpIcon /></span>
                      </div>
                    </div>
                    <Box sx={{ width: '100%', aspectRatio: '2/1' }}>
                      <LineChart
                        height={250}
                        series={[
                          { data: pData, showMark: false, curve: "linear", label: 'pv', color: '#CB3CFF', yAxisId: 'leftAxisId' },
                        ]}
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        sx={{
                          '& .MuiChartsAxis-line': {
                            stroke: 'none',
                            display: 'none',
                          },
                          '& .MuiChartsAxis-tick': {
                            stroke: 'none',
                            display: 'none',
                          },
                        }}
                        xAxis={[{
                          scaleType: 'point',
                          data: xxLabels,
                          tickLabelStyle: { fill: 'rgba(255,255,255,0.7)' },
                          disableAxisLine: true,
                          disableTicks: true,
                          margin: 10
                        }]}
                        yAxis={[
                          {
                            id: 'leftAxisId',
                            width: 50,
                            display: 'none',
                            tickLabelStyle: { fill: 'rgba(255,255,255,0.7)' },
                            disableAxisLine: false,
                            disableTicks: false,
                          },
                          {
                            id: 'rightAxisId',
                            position: 'none',
                            display: 'none',

                          },
                        ]}
                      />
                    </Box>
                    <div className='flex items-center justify-between pt-3'>
                      <p className='text-Color400 flex items-center gap-x-1 text-ColorGreen'>
                        <span className='flex border-2 border-solid border-ColorGreen p-1 px-2 rounded-md items-center gap-x-1'>
                          Live
                        </span>
                        10k visitors
                      </p>
                      <Link to="/" className='text-Color1'>View report</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Header isShowButton={true} dataValue={DataHeader[1]}/>
            
          </section>
        </main>
      </section>
    </div>
  )
}
