import { Box, Stack, Typography } from '@mui/joy';

import { CustomedFormControl, OutlinedInput, SolidButton, TextArea } from '@/shared/ui';
import { useValidatedInput } from '@/shared/hooks';
import { createValidator } from '@/shared/lib';
import { useRegisterGuestbook } from '@/entities/invitation';
import { TranslucentMobileModal } from '@/shared/components';

export function GuestbookModal({
  isGuestbookOpen,
  onClose,
}: {
  isGuestbookOpen: boolean;
  onClose: () => void;
}) {
  const registerGuestbook = useRegisterGuestbook();
  const userName = useValidatedInput('', (value) => createValidator(value).required());
  const password = useValidatedInput('', (value) =>
    createValidator(value)
      .minLength(3, {
        message: '비밀번호는 3자리 이상 입력해 주세요.',
      })
      .required(),
  );
  const content = useValidatedInput('', (value) =>
    createValidator(value).required({
      message: '내용은 필수입니다.',
    }),
  );

  const onClickGuestbookSend = () => {
    userName.initialValidate();
    password.initialValidate();
    content.initialValidate();

    if (userName.error || password.error || content.error) {
      return;
    }

    registerGuestbook.mutate(
      {
        userName: userName.value,
        password: password.value,
        content: content.value,
      },
      {
        onSuccess: () => {
          userName.onChange('');
          password.onChange('');
          content.onChange('');
          onClose();
        },
      },
    );
  };

  return (
    <TranslucentMobileModal
      title={
        <Stack>
          <Typography sx={{ color: '#333333', fontSize: '1.1rem', fontWeight: 800 }}>
            방명록 등록
          </Typography>
        </Stack>
      }
      isOpen={isGuestbookOpen}
      onClose={onClose}
      sx={{ backgroundColor: '#ffffff' }}
      closeIconColor={'#999999'}
    >
      <Stack sx={{ position: 'relative', width: '100%', height: '100%', gap: 2, py: 2, px: 3 }}>
        <CustomedFormControl
          label={'작성자'}
          required={true}
          isExternalTouched={userName.isTouched}
          error={userName.error}
          errorMessage={userName.errorMessage}
        >
          <OutlinedInput
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            focusWithin={false}
            placeholder={'10자 이내로 입력해 주세요.'}
            value={userName.value}
            onChange={(event) => userName.onChange(event.target.value)}
          />
        </CustomedFormControl>
        <CustomedFormControl
          label={'비밀번호'}
          required={true}
          isExternalTouched={password.isTouched}
          error={password.error}
          errorMessage={password.errorMessage}
        >
          <OutlinedInput
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            focusWithin={false}
            placeholder={'방명록 비밀번호를 입력해 주세요.'}
            value={password.value}
            onChange={(event) => password.onChange(event.target.value)}
          />
        </CustomedFormControl>
        <CustomedFormControl
          label={'내용'}
          required={true}
          isExternalTouched={content.isTouched}
          error={content.error}
          errorMessage={content.errorMessage}
        >
          <TextArea
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            placeholder={'500자 이내로 작성해 주세요.'}
            variant={'outlined'}
            focusWithin={false}
            minRows={10}
            maxRows={10}
            value={content.value}
            onChange={(event) => content.onChange(event.target.value)}
          />
        </CustomedFormControl>
        <Box sx={{ position: 'sticky', bottom: 0, width: '100%', pt: 2 }}>
          <SolidButton
            sx={{ width: '100%', height: 50, fontFamily: 'Pretendard', fontSize: '0.9rem' }}
            buttonColor={'#000000'}
            onClick={onClickGuestbookSend}
          >
            전송
          </SolidButton>
        </Box>
      </Stack>
    </TranslucentMobileModal>
  );
}
