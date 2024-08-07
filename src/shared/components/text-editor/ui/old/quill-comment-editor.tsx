// import { useEffect, useMemo, useRef, useState } from 'react';
// import ReactQuill from 'react-quill';
// import { Stack } from '@mui/joy';
// import Box from '@mui/joy/Box';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
// import { SxProps } from '@mui/joy/styles/types';
//
// import { useSizeMatch } from '@/shared/hooks';
// import { IconButton } from '@/shared/ui';
// import { CommentToolBar } from '@/shared/components';
//
// export function QuillCommentEditor({
//   sx,
//   modifyContent,
//   addOrModifyComment,
// }: {
//   sx?: SxProps;
//   modifyContent?: string;
//   addOrModifyComment: (content: string) => void;
// }) {
//   const mobileSizeMatches = useSizeMatch('sm');
//   const quillRef = useRef<ReactQuill>(null);
//
//   const [content, setContent] = useState('');
//
//   useEffect(() => {
//     if (modifyContent) {
//       setContent(modifyContent);
//     }
//   }, [modifyContent]);
//
//   const modules = useMemo(() => {
//     return {
//       toolbar: {
//         container: '#comment-toolbar',
//       },
//       history: {
//         delay: 500,
//         maxStack: 100,
//         userOnly: true,
//       },
//     };
//   }, []);
//
//   return (
//     <Stack sx={[{ position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]} gap={0.3}>
//       <ReactQuill
//         ref={quillRef}
//         style={{
//           border: 'none !important',
//           height: mobileSizeMatches ? '80px' : '100px',
//         }}
//         theme='snow'
//         value={content}
//         onChange={setContent}
//         placeholder={'댓글을 입력해 주세요'}
//         modules={modules}
//         // onKeyDown={(event) => {
//         //   console.log(event.key);
//         // }}
//         // onKeyUp={(event) => {
//         //   console.log(event.key);
//         // }}
//       />
//       <Box sx={{ position: 'absolute', right: 5, bottom: 50 }}>
//         <IconButton
//           sx={{ borderRadius: 30 }}
//           variant={'solid'}
//           onClick={() => {
//             addOrModifyComment(quillRef.current?.getEditor?.()?.getText?.() ?? content);
//             setContent('');
//           }}
//         >
//           <SendRoundedIcon />
//         </IconButton>
//       </Box>
//       <CommentToolBar containerId={'comment-toolbar'} />
//     </Stack>
//   );
// }
