import { Box, Stack, Typography } from '@mui/joy';
import { CustomedFormControl, OutlinedInput, SolidButton } from '@/shared/ui';
import { useValidatedInput } from '@/shared/hooks';
import { createValidator } from '@/shared/lib';
import { openDialog, TranslucentMobileModal } from '@/shared/components';
import { useDeleteGuestbook, useVerifyGuestbookPassword } from '@/entities/invitation';

export function GuestbookPasswordConfirmModal({
  targetUserIdx,
  isGuestbookPasswordConfirmOpen,
  onClose,
}: {
  targetUserIdx: number;
  isGuestbookPasswordConfirmOpen: boolean;
  onClose: () => void;
}) {
  const verifyGuestbookPassword = useVerifyGuestbookPassword();
  const deleteGuestbook = useDeleteGuestbook();

  const password = useValidatedInput('', (value) => createValidator(value).required());

  const closeModal = () => {
    password.onChange('');
    onClose();
  };

  const onClickGuestbookSend = async () => {
    password.initialValidate();

    if (password.error) {
      return;
    }

    const verifyResponse = await verifyGuestbookPassword.mutateAsync({
      userIdx: targetUserIdx,
      password: password.value,
    });

    if (!verifyResponse?.data?.success) {
      openDialog({
        contents: verifyResponse?.data?.message,
        color: 'warning',
      });
      return;
    }

    deleteGuestbook.mutate(
      {
        userIdx: targetUserIdx,
        password: password.value,
      },
      {
        onSuccess: () => {
          closeModal();
        },
      },
    );
  };

  return (
    <TranslucentMobileModal
      title={
        <Stack>
          <Typography sx={{ color: '#333333', fontSize: '1.1rem', fontWeight: 800 }}>
            비밀번호 확인
          </Typography>
        </Stack>
      }
      isOpen={isGuestbookPasswordConfirmOpen}
      onClose={closeModal}
      sx={{ backgroundColor: '#ffffff', width: '80%', height: 245, borderRadius: 16 }}
      closeIconColor={'#999999'}
    >
      <Stack sx={{ position: 'relative', width: '100%', height: '100%', gap: 2, py: 2, px: 3 }}>
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
        <Box sx={{ position: 'sticky', bottom: 0, width: '100%', pt: 2 }}>
          <SolidButton
            sx={{ width: '100%', height: 42, fontFamily: 'Pretendard', fontSize: '0.9rem' }}
            color={'danger'}
            onClick={onClickGuestbookSend}
          >
            삭제
          </SolidButton>
        </Box>
      </Stack>
    </TranslucentMobileModal>
  );
}
