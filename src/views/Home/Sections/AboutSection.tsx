import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { useDarkMode } from '../../../context/DarkModeContext';
import { AboutViewModel } from '../../../viewmodels/HomeViewModel';
import { AboutSection, AboutContent, AboutText, ChartContainer, CTAButton, defaultColors, darkModeColors } from './styleds/AboutSectionStyled';
import { SectionTitle, SectionDescription } from '../../../components/Typography';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const chartData = (chartColors: any, data: number[], labels: string[]) => ({
  labels: labels,
  datasets: [
    {
      label: 'Monthly Data',
      data: data,
      borderColor: chartColors.chartBorderColor,
      backgroundColor: chartColors.chartBackgroundColor,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: chartColors.chartPointColor,
    },
  ],
});

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 3,
    },
    point: {
      radius: 6,
      hoverRadius: 8,
    },
  },
};

const AboutSectionComponent: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const currentColors = isDarkMode ? darkModeColors : defaultColors;

  const aboutViewModel = new AboutViewModel();

  return (
    <AboutSection bgColor={currentColors.background}>
      <AboutContent>
        <AboutText textColor={currentColors.textColor}>
          <SectionTitle>{aboutViewModel.getTitle()}</SectionTitle>
          <SectionDescription>{aboutViewModel.getDescription()}</SectionDescription>
          <CTAButton
            href={aboutViewModel.getCtaLink()}
            target="_blank"
            rel="noopener noreferrer"
            bgColor={currentColors.ctaBackground}
            textColor={currentColors.ctaText}
            hoverBgColor={currentColors.ctaHoverBackground}
          >
            {aboutViewModel.getButtonText()}
          </CTAButton>
        </AboutText>
        <ChartContainer>
          <Line 
            data={chartData(currentColors, aboutViewModel.getChartData(), aboutViewModel.getChartLabels())} 
            options={chartOptions} 
          />
        </ChartContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutSectionComponent;