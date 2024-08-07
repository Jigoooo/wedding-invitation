import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import QuillResizeImage from 'quill-resize-image';

export function useCustomedQuill({
  containerId,
  placeholder,
  onChange,
}: {
  containerId: string;
  placeholder?: string;
  onChange?: (innerHTML: string) => void;
}) {
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      toolbar: {
        container: `#${containerId}`,
      },
      resize: {
        locale: {
          center: 'center',
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
    },
    formats: [
      'header',
      'bold',
      'italic',
      'font',
      'underline',
      'strike',
      'blockquote',
      'code-block',
      'formula',
      'align',
      'color',
      'background',
      'list',
      'indent',
      'link',
      'image',
      'size',
      'script',
    ],
    theme: 'snow',
    // placeholder: '글을 작성해 주세요.',
  });

  //const inputImageHandler = async (file: File) => {
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

  // const imageHandler = useCallback(() => {
  //   const input = document.createElement('input');
  //
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();
  //
  //   input.onchange = async () => {
  //     const file: any = input.files ? input.files[0] : null;
  //     if (!file) return;
  //
  //     const range = quill?.getSelection();
  //
  //     try {
  //       const imgTag = `<img src="${file}" width="90%" alt="">`;
  //       quill?.clipboard.dangerouslyPasteHTML(range!.index, imgTag);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }, [quill]);

  // useEffect(() => {
  //   if (quill) {
  //     // @ts-ignore
  //     quill.getModule('toolbar').addHandler('image', imageHandler);
  //   }
  // }, [imageHandler, quill]);

  //const insertToEditor = (url) => {
  //     const range = quill.getSelection();
  //     quill.insertEmbed(range.index, 'image', url);
  //   };
  //
  //   // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
  //   const saveToServer = async (file) => {
  //     const body = new FormData();
  //     body.append('file', file);
  //
  //     const res = await fetch('Your Image Server URL', { method: 'POST', body });
  //     insertToEditor(res.uploadedImageUrl);
  //   };
  //
  //   // Open Dialog to select Image File
  //   const selectLocalImage = () => {
  //     const input = document.createElement('input');
  //     input.setAttribute('type', 'file');
  //     input.setAttribute('accept', 'image/*');
  //     input.click();
  //
  //     input.onchange = () => {
  //       const file = input.files[0];
  //       saveToServer(file);
  //     };
  //   };
  //
  //   React.useEffect(() => {
  //     if (quill) {
  //       // Add custom handler for Image Upload
  //       quill.getModule('toolbar').addHandler('image', selectLocalImage);
  //     }
  //   }, [quill]);

  if (Quill && !quill) {
    if (!Quill.imports['modules/resize']) {
      Quill.register('modules/resize', QuillResizeImage);
    }
  }

  useEffect(() => {
    if (quill && placeholder) {
      quill.clipboard.dangerouslyPasteHTML(placeholder);
    }
  }, [quill, placeholder]);

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log('getText: ', quill.getText());
        console.log('getContents: ', quill.getContents());
        console.log('quill.root.innerHTML: ', quill.root.innerHTML);
        console.log('quillRef.current.firstChild.innerHTML: ', quillRef.current.firstChild.innerHTML);

        if (onChange) {
          onChange(quill.root.innerHTML);
        }
      });
    }
  }, [quill, quillRef, onChange]);

  return { quill, quillRef, Quill };
}
