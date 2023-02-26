import { useId, useMemo } from "react";
import Select from "react-select";
import { trpc } from "../utils/trpc";

export function MultiSelectContributor({
  selectedWriters,
  onChange,
  placeholder,
}: {
  selectedWriters: string[];
  onChange?: (writerIds: string[]) => void;
  placeholder?: string;
}) {
  const { data: contributors } = trpc.contributor.all.useQuery();
  const instanceId = useId();

  const contributorOptions = useMemo(
    () =>
      contributors?.map((x) => ({
        value: x.id,
        label: `${x.firstName} ${x.lastName}`,
      })),
    [contributors]
  );

  return (
    <Select
      placeholder={placeholder}
      isLoading={contributors == null}
      instanceId={instanceId}
      isMulti
      closeMenuOnSelect={false}
      options={contributorOptions}
      value={selectedWriters.map((v) =>
        contributorOptions?.find((o) => o.value === v)
      )}
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onChange={(it) => onChange?.(it.map((v) => v!.value))}
    />
  );
}

export function SelectContributor({
  selectedContributor,
  onChange,
  placeholder,
  className,
}: {
  selectedContributor?: string | null;
  onChange?: (writerId: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const { data: contributors } = trpc.contributor.all.useQuery();
  const instanceId = useId();

  const contributorOptions = useMemo(
    () =>
      contributors?.map((x) => ({
        value: x.id,
        label: `${x.firstName} ${x.lastName}`,
      })),
    [contributors]
  );

  return (
    <Select
      className={className}
      placeholder={placeholder}
      isLoading={contributors == null}
      instanceId={instanceId}
      options={contributorOptions}
      value={contributorOptions?.find((c) => c.value === selectedContributor)}
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onChange={(it) => onChange?.(it!.value)}
    />
  );
}