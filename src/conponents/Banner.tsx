export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const { icon, bgColor } = getBannerStyle(state);
  return (
    <p
      className={`mt-4 w-full rounded-xl p-1 text-center text-black ${bgColor}`}
    >
      {`${icon} ${message}`}
    </p>
  );
}

function getBannerStyle(state: BannerData['state']) {
  switch (state) {
    case 'success':
      return {
        icon: '🎉',
        bgColor: 'bg-blue-300',
      };
    case 'error':
      return {
        icon: '😭',
        bgColor: 'bg-red-300',
      };
  }
}
