import * as Tabs from "@radix-ui/react-tabs";

export function TabsMenu() {
    return(
      <div className="max-w-4xl w-full">
        <Tabs.Root
          defaultValue="tab1"
          className="flex flex-col gap-4"
        >
          <Tabs.List className="flex gap-2">
            <Tabs.Trigger
              value="tab1"
              className="py-2 px-4 data-[state='active']:border-b select-none"
            >
              Cast
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className="py-2 px-4 data-[state='active']:border-b select-none"
            >
              Trailer
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab3"
              className="py-2 px-4 data-[state='active']:border-b select-none"
            >
              Audio
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab4"
              className="py-2 px-4 data-[state='active']:border-b select-none"
            >
              Subtitles
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab5"
              className="py-2 px-4 data-[state='active']:border-b select-none"
            >
              Media
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="tab1">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Actors</h2>

              <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
                <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                  <div className="w-full">
                    <img
                      className="rounded-t-md"
                      src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                      alt="Actor photo"
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <span className="text-base font-semibold">
                      Actor name
                    </span>
                    <span className="text-sm text-zinc-50/50">
                      Character name
                    </span>
                  </div>
                </div>
                <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                  <div className="w-full">
                    <img
                      className="rounded-t-md"
                      src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                      alt="Actor photo"
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <span className="text-base font-semibold">
                      Actor name
                    </span>
                    <span className="text-sm text-zinc-50/50">
                      Character name
                    </span>
                  </div>
                </div>
                <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                  <div className="w-full">
                    <img
                      className="rounded-t-md"
                      src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                      alt="Actor photo"
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <span className="text-base font-semibold">
                      Actor name
                    </span>
                    <span className="text-sm text-zinc-50/50">
                      Character name
                    </span>
                  </div>
                </div>
                <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                  <div className="w-full">
                    <img
                      className="rounded-t-md"
                      src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                      alt="Actor photo"
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <span className="text-base font-semibold">
                      Actor name
                    </span>
                    <span className="text-sm text-zinc-50/50">
                      Character name
                    </span>
                  </div>
                </div>
                <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                  <div className="w-full">
                    <img
                      className="rounded-t-md"
                      src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                      alt="Actor photo"
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <span className="text-base font-semibold">
                      Actor name
                    </span>
                    <span className="text-sm text-zinc-50/50">
                      Character name
                    </span>
                  </div>
                </div>
                <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                  <div className="w-full">
                    <img
                      className="rounded-t-md"
                      src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                      alt="Actor photo"
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <span className="text-base font-semibold">
                      Actor name
                    </span>
                    <span className="text-sm text-zinc-50/50">
                      Character name
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="tab2">TRAILER</Tabs.Content>
          <Tabs.Content value="tab3">AUDIO</Tabs.Content>
          <Tabs.Content value="tab4">SUBTITLES</Tabs.Content>
          <Tabs.Content value="tab5">MEDIA</Tabs.Content>
        </Tabs.Root>
      </div>
    )
}