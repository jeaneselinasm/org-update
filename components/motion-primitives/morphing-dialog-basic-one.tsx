import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from './morphing-dialog';

interface MorphingDialogBasicOneProps {
  title : string
  subtitle : string
  image :  string
}
export function MorphingDialogBasicOne({title,subtitle, image} : MorphingDialogBasicOneProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex  flex-col overflow-hidden hover:shadow-lg transition-shadow  border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <div className="">
          <div>
            <MorphingDialogTitle className='mt-4 font-bold text-xl text-blue-900 dark:text-zinc-50'>
             {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='p-6  text-zinc-700 dark:text-zinc-400'>
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
        >
          <MorphingDialogImage
            src={image}
            alt='pics'
            className='h-full w-full'
          />
          <div className='p-6'>
            <MorphingDialogTitle className='text-2xl text-orange-500 dark:text-zinc-50'>
            {title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
             {subtitle}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem autem obcaecati itaque?
              </p>
              <p className='text-zinc-500'>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic tenetur repellendus porro. Dolores enim exercitationem quam fuga. Praesentium numquam, delectus fugit quam consectetur similique aperiam fugiat. Eveniet, omnis eos!
              </p>
              <a
                className='mt-2 inline-flex text-zinc-500 underline'
                href='https://www.are.na/block/12759029'
                target='_blank'
                rel='noopener noreferrer'
              >
                See Detail
              </a>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className='text-zinc-500' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
