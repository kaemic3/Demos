import { Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <div>
    <Heading size="9" className="pb-8 text-center SelectedColor">Projects</Heading>
    <div className="flex items-center justify-center">
        <ul className=" w-full md:w-3/6 text-xl space-y-3 pb-3 TextColor">
            <Card asChild className="p-8">
                <a href="/GMu">
                    <Grid columns="2">
                        <Heading size="7" className="">GMu</Heading>
                        <Text className="text-right py-1 pr-1">Learn more about my GameBoy emulator.</Text>
                    </Grid>
                </a>
            </Card>
        </ul>
    </div>
</div>
  );
}
