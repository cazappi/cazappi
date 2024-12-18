import React from 'react';
import  {ScheduleContainer, ScheduleTitle, ScheduleList, ScheduleHeader, HeaderColumn, ScheduleItem, ItemColumn, TimeSelect } from './style';

interface ScheduleProps {
  scheduleData: {
    openingTime: { [key: string]: string };
    closingTime: { [key: string]: string };
  };
  onChange: (
    day: string,
    type: 'openingTime' | 'closingTime',
    value: string
  ) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ scheduleData, onChange }) => {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const daysMap: { [key: string]: 'mon' | 'tue' | 'wed' | 'thur' | 'fri' | 'sat' | 'sun' } = {
    Dom: 'sun',
    Seg: 'mon',
    Ter: 'tue',
    Qua: 'wed',
    Qui: 'thur',
    Sex: 'fri',
    Sáb: 'sat',
  };
  
  return (
    <ScheduleContainer>
      <ScheduleTitle>Horário de funcionamento</ScheduleTitle>
      <ScheduleList>
        <ScheduleHeader>
          <HeaderColumn>Dia</HeaderColumn>
          <HeaderColumn>Horário início</HeaderColumn>
          <HeaderColumn>Horário fim</HeaderColumn>
        </ScheduleHeader>

        {daysOfWeek.map((dia) => {
          const day = daysMap[dia];
          const openingTime = scheduleData.openingTime[day] || '00h00';
          const closingTime = scheduleData.closingTime[day] || '00h00';

          return (
            <ScheduleItem key={day}>
              <ItemColumn>{dia}</ItemColumn>
              {/* horario de abertura */}
              <ItemColumn>
                <TimeSelect
                  value={openingTime}
                  onChange={(e) => onChange(day, 'openingTime', e.target.value)}
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={`${i.toString().padStart(2, '0')}h00`}>
                      {`${i.toString().padStart(2, '0')}h00`}
                    </option>
                  ))}
                </TimeSelect>
              </ItemColumn>
              {/* horario de fechamento */}
              <ItemColumn>
                <TimeSelect
                  value={closingTime}
                  onChange={(e) => onChange(day, 'closingTime', e.target.value)}
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={`${i.toString().padStart(2, '0')}h00`}>
                      {`${i.toString().padStart(2, '0')}h00`}
                    </option>
                  ))}
                </TimeSelect>
              </ItemColumn>
            </ScheduleItem>
          );
        })}
      </ScheduleList>
    </ScheduleContainer>
  );
};

export default Schedule;
