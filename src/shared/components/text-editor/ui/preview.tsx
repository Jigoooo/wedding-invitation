import { useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { Divider, Link, Stack } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { useColorScheme } from '@mui/joy/styles';

import { colors } from '@/shared/constants';
import { scrollToTop, applyMiddleEllipsis, fileSizeFormatter } from '@/shared/lib';
import { useSizeMatch } from '@/shared/hooks';
import { EditVerticalDotMenu } from '@/shared/components';

export function Preview({
  isOwnBoard,
  title,
  content,
  attachments,
  authorUserId,
  views,
  commentCount,
  createdDt,
  onClickModify,
  onClickDelete,
  onClickReport,
  toCommentMove,
}: {
  isOwnBoard: boolean;
  title: string;
  content: string;
  attachments: { idx: number; path: string; fileName: string; originalFileName: string; fileSize: number }[];
  authorUserId: string;
  views: number;
  commentCount?: number;
  createdDt: string;
  onClickModify: () => void;
  onClickDelete: () => void;
  onClickReport: () => void;
  toCommentMove?: () => void;
}) {
  const mobileSizeMatches = useSizeMatch('sm');
  const { mode } = useColorScheme();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Stack
      sx={{
        backgroundColor: mode === 'light' ? colors.white : colors.backgroundColorDark,
        minHeight: '40svh',
        whiteSpace: 'normal',
      }}
    >
      <Stack sx={{ px: 1, gap: 1 }}>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography level={'h2'}>{title}</Typography>

          {isOwnBoard ? (
            <EditVerticalDotMenu onClickModify={onClickModify} onClickDelete={onClickDelete} />
          ) : (
            <EditVerticalDotMenu onClickReport={onClickReport} />
          )}
        </Stack>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', pt: 2 }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Avatar
              variant='outlined'
              size='md'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
            />
            <Box>
              <Typography level='title-sm'>{authorUserId}</Typography>
              <Typography level='body-xs'>{createdDt}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {toCommentMove && commentCount !== undefined && (
              <Link
                underline={'none'}
                startDecorator={<TextsmsOutlinedIcon />}
                color={'neutral'}
                onClick={toCommentMove}
              >
                댓글 {commentCount}
              </Link>
            )}
            <Typography sx={{ alignSelf: 'center' }}>조회수 {views}</Typography>
          </Box>
        </Stack>
        <Divider />
        {attachments.length !== 0 && (
          <Stack sx={{ py: 1, pl: 4, gap: 1, borderBottom: '1px dashed #bbbbbb' }}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>- 첨부파일</Typography>
            <Stack sx={{ gap: 0.5, pb: 1, pl: mobileSizeMatches ? 2 : 0, width: mobileSizeMatches ? '100%' : '60%' }}>
              {attachments.map((attachment) => {
                const { sizeInKB, sizeInMB, isUnder1MB } = fileSizeFormatter(attachment.fileSize);
                const fileSize = !isUnder1MB ? sizeInMB.toFixed(2) : sizeInKB.toFixed(2);
                console.log(attachment);
                return (
                  <Box
                    key={attachment.idx}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 1,
                      alignItems: 'center',
                    }}
                  >
                    <Link
                      sx={{
                        display: 'block',
                        width: mobileSizeMatches ? '60%' : '50%',
                        textDecorationColor: colors.primary[400],
                        textAlign: 'left',
                        fontSize: 15,
                      }}
                      underline={'always'}
                      color={'neutral'}
                      href={attachment.path}
                      target={'_blank'}
                      download={attachment.originalFileName}
                    >
                      {applyMiddleEllipsis(attachment.originalFileName, 30, 14, 8)}
                    </Link>
                    <Typography sx={{ pt: 0.5 }} level={'body-xs'} fontWeight={300}>
                      {`${fileSize} ${isUnder1MB ? 'KB' : 'MB'}`}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
            <Typography sx={{ fontSize: 13, fontWeight: 500, color: 'fireBrick' }}>
              &#8251; 첨부파일은 6개월간 다운로드 가능합니다
            </Typography>
          </Stack>
        )}
      </Stack>
      <div
        className='ql-editor'
        style={{ minHeight: 300 }}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      />
    </Stack>
  );
}
