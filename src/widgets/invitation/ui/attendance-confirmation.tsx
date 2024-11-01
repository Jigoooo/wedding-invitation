import { Box, Stack, Typography } from '@mui/joy';

import { CustomedFormControl, FuturRadioGroup, OutlinedInput, SolidButton } from '@/shared/ui';
import { TranslucentMobileModal } from '@/shared/components';
import { useValidatedForm } from '@/shared/hooks/form/use-validated-form.ts';
import { createValidator } from '@/shared/lib';
import { PRegisterWeddingAttendance, useRegisterWeddingAttendance } from '@/entities/invitation';

export function AttendanceConfirmationModal({
  isAttendanceConfirmationOpen,
  onClose,
}: {
  isAttendanceConfirmationOpen: boolean;
  onClose: () => void;
}) {
  const registerWeddingAttendance = useRegisterWeddingAttendance();

  const defaultValues: PRegisterWeddingAttendance = {
    attendanceName: '',
    guestSide: 'groom',
    isAttending: 1,
    headCount: 1,
    mealStatus: 'planned',
  };

  const { values, errors, errorMessages, onChange, initValues, isTouched, hasErrors } =
    useValidatedForm(defaultValues, {
      attendanceName: (value) =>
        createValidator(value).required({
          message: '성함을 입력해 주세요.',
        }),
      guestSide: (value) => createValidator(value).required(),
      isAttending: (value) => createValidator(value).required(),
      headCount: (value) =>
        createValidator(value)
          .number({
            message: '인원수는 숫자만 입력해 주세요.',
          })
          .greaterThanOrEqual(1, {
            message: '인원수는 1명 이상이어야 합니다.',
          })
          .required(),
      mealStatus: (value) => createValidator(value).required(),
    });

  const closeModal = () => {
    initValues();
    onClose();
  };

  const onClickRegisterWeddingAttendance = () => {
    if (hasErrors()) {
      return;
    }

    registerWeddingAttendance.mutate(
      {
        isAttending: Number(values.isAttending),
        guestSide: values.guestSide,
        attendanceName: values.attendanceName,
        headCount: Number(values.headCount),
        mealStatus: values.mealStatus,
      },
      {
        onSuccess(data) {
          if (data.code === 200) {
            closeModal();
          }
        },
      },
    );
  };

  return (
    <TranslucentMobileModal
      title={
        <Stack>
          <Typography sx={{ color: '#333333', fontSize: '1.1rem', fontWeight: 800 }}>
            참석의사 전달
          </Typography>
        </Stack>
      }
      isOpen={isAttendanceConfirmationOpen}
      onClose={closeModal}
      sx={{ backgroundColor: '#ffffff' }}
      closeIconColor={'#999999'}
    >
      <Stack
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          py: 3,
          gap: 3,
        }}
      >
        <CustomedFormControl
          label={'참석 가능 여부'}
          required={true}
          error={errors.isAttending}
          errorMessage={errorMessages.isAttending}
          isExternalTouched={isTouched.isAttending}
        >
          <FuturRadioGroup
            options={[
              { key: '1', value: '1', label: '가능' },
              { key: '0', value: '0', label: '불가능' },
            ]}
            defaultValue={'1'}
            value={values.isAttending}
            onChange={(event) => onChange('isAttending', event.target.value)}
            color={'neutral'}
          />
        </CustomedFormControl>
        <CustomedFormControl
          label={'하객 구분'}
          required={true}
          error={errors.guestSide}
          errorMessage={errorMessages.guestSide}
          isExternalTouched={isTouched.guestSide}
        >
          <FuturRadioGroup
            options={[
              { key: 'groom', value: 'groom', label: '신랑측' },
              { key: 'bride', value: 'bride', label: '신부측' },
            ]}
            defaultValue={'groom'}
            value={values.guestSide}
            onChange={(event) => onChange('guestSide', event.target.value)}
            color={'neutral'}
          />
        </CustomedFormControl>
        <CustomedFormControl
          label={'성함'}
          required={true}
          error={errors.attendanceName}
          errorMessage={errorMessages.attendanceName}
          isExternalTouched={isTouched.attendanceName}
        >
          <OutlinedInput
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            focusWithin={false}
            placeholder={'대표자 한 분의 성함을 입력해 주세요.'}
            value={values.attendanceName}
            onChange={(event) => onChange('attendanceName', event.target.value)}
          />
        </CustomedFormControl>
        <CustomedFormControl
          label={'총 인원'}
          required={true}
          error={errors.headCount}
          errorMessage={errorMessages.headCount}
          isExternalTouched={isTouched.headCount}
        >
          <OutlinedInput
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            type={'number'}
            focusWithin={false}
            placeholder={'본인 포함 총 인원수를 입력해 주세요.'}
            value={values.headCount}
            onChange={(event) => onChange('headCount', event.target.value)}
          />
        </CustomedFormControl>
        <CustomedFormControl
          label={'식사여부'}
          required={true}
          error={errors.mealStatus}
          errorMessage={errorMessages.mealStatus}
          isExternalTouched={isTouched.mealStatus}
        >
          <FuturRadioGroup
            defaultValue={'planned'}
            options={[
              { key: 'planned', value: 'planned', label: '예정' },
              { key: 'not_planned', value: 'not_planned', label: '안함' },
              { key: 'undecided', value: 'undecided', label: '미정' },
            ]}
            color={'neutral'}
            value={values.mealStatus}
            onChange={(event) => onChange('mealStatus', event.target.value)}
          />
        </CustomedFormControl>
        <Box
          sx={{ position: 'sticky', bottom: 0, width: '100%', pt: 2, backgroundColor: '#ffffff' }}
        >
          <SolidButton
            sx={{ width: '100%', height: 50, fontFamily: 'Pretendard', fontSize: '0.9rem' }}
            buttonColor={'#000000'}
            onClick={onClickRegisterWeddingAttendance}
          >
            전송
          </SolidButton>
        </Box>
      </Stack>
    </TranslucentMobileModal>
  );
}
