// import 'react-datepicker/dist/react-datepicker.css';
// import '@/shared/assets/css/date-time-picker.css';
//
// import DatePicker, { DatePickerProps } from 'react-datepicker';
// import { useColorScheme } from '@mui/joy/styles';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import { getMonth, getYear } from 'date-fns';
// import { ko } from 'date-fns/locale';
//
// import { MONTHS } from '@/shared/constants';
// import { getYears } from '@/shared/lib';
// import { useSizeMatch } from '@/shared/hooks';
// import { SyntheticEvent } from 'react';
//
// export function FuturDateTimePicker({
//   selected = new Date(),
//   onChange,
//   minDate,
//   maxDate,
//   showTimeSelect = false,
//   withPortal = false,
//   minTime,
//   maxTime,
//   timeIntervals = 1,
// }: Readonly<DatePickerProps>) {
//   const years = getYears();
//
//   const { mode } = useColorScheme();
//   const mobileSizeMatches = useSizeMatch('sm');
//
//   const datePickerClassName = mode === 'dark' ? 'react_datepicker_dark' : 'react_datepicker_light';
//
//   // const filterPassedTime = (time: string | number | Date) => {
//   //   const currentDate = new Date();
//   //   const selectedDate = new Date(time);
//   //
//   //   return currentDate.getTime() < selectedDate.getTime();
//   // };
//
//   const handleChange = (date: Date | Date[] | null, event?: SyntheticEvent<any>) => {
//     // @ts-ignore
//     onChange(date, event);
//   };
//
//   return (
//     <DatePicker
//       renderCustomHeader={({ date, changeYear, changeMonth }) => (
//         <div id='datepicker__select-container'>
//           <select
//             id='datepicker__select-year'
//             value={getYear(date)}
//             onChange={({ target: { value } }) => changeYear(Number(value))}
//           >
//             {years.map((option: string) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           <select
//             id='datepicker__select-month'
//             value={MONTHS[getMonth(date)]}
//             onChange={({ target: { value } }) => changeMonth(MONTHS.indexOf(value))}
//           >
//             {MONTHS.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       className={`selection-none ${datePickerClassName}`}
//       calendarClassName={showTimeSelect ? 'react-datepicker-time' : 'react-datepicker-none-time'}
//       required={false}
//       locale={ko}
//       dateFormat={showTimeSelect ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'}
//       showPopperArrow={false}
//       fixedHeight
//       showIcon
//       selected={selected}
//       onChange={handleChange}
//       minDate={minDate}
//       maxDate={maxDate}
//       icon={<CalendarTodayIcon style={{ justifyContent: 'center', paddingTop: '10px' }} fontSize={'small'} />}
//       withPortal={mobileSizeMatches || withPortal}
//       showTimeSelect={showTimeSelect}
//       // filterTime={filterPassedTime}
//       minTime={minTime}
//       maxTime={maxTime}
//       timeIntervals={timeIntervals}
//       timeCaption={'시간'}
//     />
//   );
// }
