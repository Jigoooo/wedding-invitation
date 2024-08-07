// import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// import { Box, Stack } from '@mui/joy';
// import ReactQuill, { Quill } from 'react-quill';
//
// import { ToolBar } from '../tool-bar.tsx';
// import { useSizeMatch } from '@/shared/hooks';
// import { UnderlineInput } from '@/shared/ui/inputs';
// import { hideLoading, showLoading, FileUploadForm } from '@/shared/components';
// import { AttachmentType, AttachmentTypeBase, LoadingType } from '@/shared/enum';
// import { base64ToFile, extractBase64ImageSrc, resizeImage } from '@/shared/lib';
//
// export function QuillTextEditor({
//   attachments,
//   modifyTitle,
//   modifyContent,
//   fileHandlerService,
//   fileDelete,
// }: {
//   attachments: any[];
//   modifyTitle: string;
//   modifyContent: string;
//   prevPageMove: () => void;
//   onSave: (title: string, html: string, content: string) => void;
//   fileHandlerService: (file: File, attachmentType: AttachmentTypeBase) => Promise<{ path: string; idx: number }>;
//   fileDelete: (fileIdx: number) => void;
// }) {
//   const mobileSizeMatches = useSizeMatch('sm');
//
//   const quillRef = useRef<ReactQuill | null>(null);
//
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//
//   useEffect(() => {
//     setTitle(modifyTitle);
//     setContent(modifyContent);
//   }, [modifyTitle, modifyContent]);
//
//   const inputImageHandler = async (file: File) => {
//     const compressedFile = (await resizeImage({ file })) as File;
//
//     const quillObj = quillRef.current?.getEditor();
//     const range = quillObj?.getSelection();
//
//     showLoading(LoadingType.MOON_LOADING, '이미지를 불러오는중 이에요');
//     const { path } = await fileHandlerService(compressedFile, AttachmentType.IMG);
//
//     if (!path) {
//       hideLoading(LoadingType.MOON_LOADING);
//       return;
//     }
//
//     try {
//       // quillObj?.insertEmbed(range.index, 'image', path);
//       const imgTag = `<img src="${path}" width="90%" alt="">`;
//       quillObj?.clipboard.dangerouslyPasteHTML(range!.index, imgTag);
//
//       hideLoading(LoadingType.MOON_LOADING);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   useEffect(() => {
//     const base64ImageSrcArr = extractBase64ImageSrc(content);
//
//     if (base64ImageSrcArr.length !== 0) {
//       if (!quillRef.current) return;
//
//       const editor = quillRef.current.getEditor();
//       const html = editor.root.innerHTML;
//
//       const updatedHtml = html.replace(/<img src="data:image\/[^"]+"[^>]*>/g, '');
//       editor.root.innerHTML = updatedHtml;
//
//       base64ImageSrcArr.forEach((base64Src) => {
//         const file = base64ToFile(base64Src, `image_${new Date().getTime()}`);
//         if (file === null) return;
//
//         inputImageHandler(file);
//       });
//     }
//   }, [content]);
//
//   const imageHandler = useCallback(() => {
//     const input = document.createElement('input');
//
//     input.setAttribute('type', 'file');
//     input.setAttribute('accept', 'image/*');
//     input.click();
//
//     input.onchange = async () => {
//       const file: any = input.files ? input.files[0] : null;
//       if (!file) return;
//
//       inputImageHandler(file);
//     };
//   }, []);
//
//   const modules = useMemo(() => {
//     return {
//       toolbar: {
//         container: '#toolbar',
//         handlers: {
//           image: imageHandler,
//         },
//       },
//       imageResize: {
//         parchment: Quill.import('parchment'),
//         modules: ['Resize', 'DisplaySize'],
//         displayStyles: {
//           backgroundColor: 'black',
//           border: 'none',
//           color: 'white',
//         },
//       },
//       history: {
//         delay: 500,
//         maxStack: 100,
//         userOnly: true,
//       },
//     };
//   }, [imageHandler]);
//
//   return (
//     <Box>
//       <Stack sx={{ gap: 1, minWidth: mobileSizeMatches ? '100%' : 750 }}>
//         <>
//           <UnderlineInput
//             sx={{ mb: 1, borderRadius: 5 }}
//             variant={'outlined'}
//             placeholder={'제목을 입력해 주세요'}
//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//           />
//           <ToolBar />
//           <ReactQuill
//             ref={quillRef}
//             style={{ height: mobileSizeMatches ? '62vh' : '56vh' }}
//             theme='snow'
//             value={content}
//             onChange={setContent}
//             placeholder={'내용을 입력해 주세요'}
//             modules={modules}
//           />
//           <FileUploadForm
//             attachments={attachments}
//             fileHandlerService={(file) => fileHandlerService(file, AttachmentType.ATTACHMENT)}
//             fileDelete={fileDelete}
//           />
//         </>
//       </Stack>
//     </Box>
//   );
// }
