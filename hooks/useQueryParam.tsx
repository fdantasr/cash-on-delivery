'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function useQueryParam(
  key: string,
  defaultValue: string = '',
): [string, (value: string) => void] {
  const location = useSearchParams();
  const history = useRouter();
  const pathname = usePathname();

  const [paramValue, setParamValue] = useState<string>(() => {
    const params = new URLSearchParams(location.toString());
    return params.get(key) || defaultValue;
  });

  useEffect(() => {
    const params = new URLSearchParams(location.toString());
    if (paramValue) {
      params.set(key, paramValue);
    } else {
      params.delete(key);
    }
    history.replace(`${pathname}?${params.toString()}`);
  }, [key, paramValue, location.toString(), history]);

  return [paramValue, setParamValue];
}

export default useQueryParam;
