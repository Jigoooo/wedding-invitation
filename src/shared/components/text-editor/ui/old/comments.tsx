// import { RefObject, useState } from 'react';
// import { Chip, Divider, Link, Stack } from '@mui/joy';
// import Typography from '@mui/joy/Typography';
// import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
// import { useColorScheme } from '@mui/joy/styles';
//
// import { colors } from '@/shared/constants';
// import { openDialog, QuillCommentEditor } from '@/shared/components';
// import { isNullOrUndefined } from '@/shared/lib';
// import { useSizeMatch } from '@/shared/hooks';
// import { SolidButton } from '@/shared/ui';
//
// export function Comments({
//   commentRef,
//   userInfo,
//   comments,
//   addComment,
//   modifyComment,
//   deleteComment,
//   reportComment,
// }: {
//   commentRef: RefObject<HTMLDivElement>;
//   userInfo: any;
//   comments: any[];
//   addComment: (content: string, parentIdx?: number, hashTags?: string[]) => void;
//   modifyComment: (content: string, commentIdx: number, hashTags?: string[]) => void;
//   deleteComment: (commentIdx: number) => void;
//   reportComment: (reportCommentIdx: number, author: string, reportContent: string) => void;
// }) {
//   const { mode } = useColorScheme();
//   const mobileSizeMatches = useSizeMatch('sm');
//
//   const [targetComment, setTargetComment] = useState<{
//     idx: number;
//     parentIdx: number | null;
//     authorUserIds: string[];
//   } | null>(null);
//   const [targetModifyCommentIdx, setTargetModifyCommentIdx] = useState<number | null>(null);
//
//   const onClickDeleteComment = (commentIdx: number) => {
//     if (isNullOrUndefined(commentIdx)) return;
//
//     openDialog({
//       contents: '댓글을 삭제하시겠습니까?',
//       withCancel: true,
//       color: 'danger',
//       confirmText: '댓글 삭제',
//       confirmCallback: () => deleteComment(commentIdx),
//     });
//   };
//
//   return (
//     <Stack
//       ref={commentRef}
//       sx={{ backgroundColor: mode === 'light' ? colors.white : colors.backgroundColorDark, px: 3, py: 2 }}
//     >
//       {comments.map((comment: any) => {
//         const addCommentPaddingLeft = mobileSizeMatches ? 2 : 6;
//
//         return (
//           <Box key={comment.idx}>
//             <Divider sx={{ backgroundColor: '#eaeaea', mt: 2 }} />
//             {comment.idx === targetModifyCommentIdx ? (
//               <>
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
//                   <SolidButton color={'danger'} onClick={() => setTargetModifyCommentIdx(null)}>
//                     수정 취소하기
//                   </SolidButton>
//                 </Box>
//                 <QuillCommentEditor
//                   sx={{ justifyContent: 'flex-end', mt: 1, pl: addCommentPaddingLeft, width: '100%' }}
//                   modifyContent={comment.content}
//                   addOrModifyComment={(content) => {
//                     modifyComment(content, targetModifyCommentIdx ?? -1, comment.hashTags ?? undefined);
//                     setTargetModifyCommentIdx(null);
//                   }}
//                 />
//               </>
//             ) : (
//               <Box sx={{ display: 'flex', pt: 2, gap: 1, pl: 0, alignItems: 'center' }}>
//                 <Avatar
//                   variant='outlined'
//                   size='md'
//                   src='https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
//                 />
//                 <Box sx={{ width: '100%' }}>
//                   <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: -0.5 }}>
//                     <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                       <Typography level='title-sm' fontWeight={'bold'}>
//                         {comment.authorUserId}
//                       </Typography>
//                       <Typography level='body-xs'>{comment.createdDt}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', gap: 1.5 }}>
//                       {comment.authorUserId === userInfo.userId && (
//                         <>
//                           <Link
//                             color={'neutral'}
//                             underline={'none'}
//                             onClick={() => setTargetModifyCommentIdx(comment.idx)}
//                           >
//                             수정
//                           </Link>
//                           <Link color={'danger'} underline={'none'} onClick={() => onClickDeleteComment(comment.idx)}>
//                             삭제
//                           </Link>
//                         </>
//                       )}
//                       {comment.authorUserId !== userInfo.userId && (
//                         <Link
//                           color={'danger'}
//                           underline={'none'}
//                           onClick={() => reportComment(comment.idx, comment.authorUserId, comment.content)}
//                         >
//                           신고
//                         </Link>
//                       )}
//                     </Box>
//                   </Box>
//                   <Typography level='title-sm'>{comment.content}</Typography>
//                   <Box sx={{ marginTop: -0.5 }}>
//                     <Link
//                       level='body-xs'
//                       onClick={() =>
//                         setTargetComment({ idx: comment.idx, parentIdx: null, authorUserIds: [comment.authorUserId] })
//                       }
//                     >
//                       답글달기
//                     </Link>
//                   </Box>
//                 </Box>
//               </Box>
//             )}
//
//             {comment.idx === targetComment?.idx && (
//               <QuillCommentEditor
//                 sx={{ justifyContent: 'flex-end', mt: 1, pl: addCommentPaddingLeft, width: '100%' }}
//                 addOrModifyComment={(content) => {
//                   addComment(content, targetComment?.idx ?? undefined, targetComment?.authorUserIds);
//                   setTargetComment(null);
//                 }}
//               />
//             )}
//             {comment?.children?.map?.((childrenComment: any) => {
//               const addChildCommentPaddingLeft = mobileSizeMatches ? 4 : 8;
//
//               return (
//                 <Box key={childrenComment.idx}>
//                   {childrenComment.idx === targetModifyCommentIdx ? (
//                     <>
//                       <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
//                         <SolidButton color={'danger'} onClick={() => setTargetModifyCommentIdx(null)}>
//                           수정 취소하기
//                         </SolidButton>
//                       </Box>
//                       <QuillCommentEditor
//                         sx={{ justifyContent: 'flex-end', mt: 1, pl: addCommentPaddingLeft, width: '100%' }}
//                         modifyContent={childrenComment.content}
//                         addOrModifyComment={(content) => {
//                           modifyComment(content, targetModifyCommentIdx ?? -1, childrenComment.hashTags ?? undefined);
//                           setTargetModifyCommentIdx(null);
//                         }}
//                       />
//                     </>
//                   ) : (
//                     <Box sx={{ display: 'flex', pt: 2, gap: 1, pl: 6, alignItems: 'center' }}>
//                       <Avatar
//                         variant='outlined'
//                         size='md'
//                         src='https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
//                       />
//                       <Box sx={{ width: '100%' }}>
//                         <Box
//                           sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: -0.5 }}
//                         >
//                           <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                             <Typography level='title-sm' fontWeight={'bold'}>
//                               {childrenComment.authorUserId}
//                             </Typography>
//                             <Typography level='body-xs'>{comment.createdDt}</Typography>
//                           </Box>
//                           <Box sx={{ display: 'flex', gap: 1.5 }}>
//                             {childrenComment.authorUserId === userInfo.userId && (
//                               <>
//                                 <Link
//                                   color={'neutral'}
//                                   underline={'none'}
//                                   onClick={() => setTargetModifyCommentIdx(childrenComment.idx)}
//                                 >
//                                   수정
//                                 </Link>
//                                 <Link
//                                   color={'danger'}
//                                   underline={'none'}
//                                   onClick={() => onClickDeleteComment(childrenComment.idx)}
//                                 >
//                                   삭제
//                                 </Link>
//                               </>
//                             )}
//                             {childrenComment.authorUserId !== userInfo.userId && (
//                               <Link
//                                 color={'danger'}
//                                 underline={'none'}
//                                 onClick={() =>
//                                   reportComment(
//                                     childrenComment.idx,
//                                     childrenComment.authorUserId,
//                                     childrenComment.content,
//                                   )
//                                 }
//                               >
//                                 신고
//                               </Link>
//                             )}
//                           </Box>
//                         </Box>
//                         <Box sx={{ display: 'flex', gap: 1, py: 0.5 }}>
//                           {childrenComment.hashTags?.map?.((hashTag: string, index: number) => {
//                             return (
//                               <Chip
//                                 key={index}
//                                 variant='outlined'
//                                 size='sm'
//                                 startDecorator={<Avatar size='sm' src={''} />}
//                                 sx={{ color: 'mediumorchid', borderColor: 'mediumorchid', fontWeight: 600 }}
//                                 // endDecorator={<CheckIcon fontSize='md' />}
//                                 // onClick={() => alert('You clicked the Joy Chip!')}
//                               >
//                                 {hashTag}
//                               </Chip>
//                             );
//                           })}
//                           <Typography level='title-sm'>{childrenComment.content}</Typography>
//                         </Box>
//                         <Box sx={{ marginTop: -0.5 }}>
//                           <Link
//                             level='body-xs'
//                             onClick={() =>
//                               setTargetComment({
//                                 idx: childrenComment.idx,
//                                 parentIdx: comment.idx,
//                                 authorUserIds: [childrenComment.authorUserId],
//                               })
//                             }
//                           >
//                             답글달기
//                           </Link>
//                         </Box>
//                       </Box>
//                     </Box>
//                   )}
//                   {childrenComment.idx === targetComment?.idx && (
//                     <QuillCommentEditor
//                       sx={{ justifyContent: 'flex-end', mt: 1, pl: addChildCommentPaddingLeft, width: '100%' }}
//                       addOrModifyComment={(content) => {
//                         addComment(content, targetComment?.parentIdx ?? undefined, targetComment?.authorUserIds);
//                         setTargetComment(null);
//                       }}
//                     />
//                   )}
//                 </Box>
//               );
//             })}
//           </Box>
//         );
//       })}
//       {/*<Card*/}
//       {/*  variant='plain'*/}
//       {/*  sx={{*/}
//       {/*    backgroundColor: mode === 'light' ? colors.white : colors.backgroundColorDark,*/}
//       {/*    borderRadius: 'sm',*/}
//       {/*    display: 'flex',*/}
//       {/*    flexDirection: 'column',*/}
//       {/*    gap: 1,*/}
//       {/*    alignItems: 'center',*/}
//       {/*    px: 3,*/}
//       {/*    mt: 2.5,*/}
//       {/*    flexGrow: 1,*/}
//       {/*    boxShadow: 'none',*/}
//       {/*  }}*/}
//       {/*>*/}
//       {/*  <Typography level='body-sm' textAlign='center'>*/}
//       {/*    <Link component='button' overlay onClick={() => {}} color={'neutral'}>*/}
//       {/*      댓글 더보기*/}
//       {/*    </Link>*/}
//       {/*  </Typography>*/}
//       {/*</Card>*/}
//     </Stack>
//   );
// }
