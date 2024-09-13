import {Avatar, Badge, Button, Card, Flex, Input, Select, Table, TableData, Text} from "@mantine/core";

export const ShiftsPage = () => {
    const tableData: TableData = {
        head: ['Sl No', 'Patient Name', 'Shift', 'Status', 'Actions',],
        body: [
            [<Flex align={'center'} gap={'xs'} direction={'row'}><Avatar size={'md'} color="brand"
                                                                         radius="xl">MK</Avatar><Text fw={'600'}
                                                                                                      size="sm">Robert
                Williams</Text></Flex>, 12.011, <Select
                w={'150px'}
                placeholder="Pick value"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                nothingFoundMessage="Nothing found..."
            />, <Badge size={'md'} variant="filled" color="green" radius="">Completed</Badge>,
                <Button variant={'outline'} size={'xs'} radius={'none'}>Edit</Button>],
            [<Flex align={'center'} gap={'xs'} direction={'row'}><Avatar size={'md'} color="red"
                                                                         radius="xl">MK</Avatar><Text fw={'600'}
                                                                                                      size="sm">Robert
                Williams</Text></Flex>, 12.011, <Select
                w={'150px'}
                placeholder="Pick value"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                nothingFoundMessage="Nothing found..."
            />, <Badge size={'md'} variant="filled" color="green" radius="">Completed</Badge>,
                <Button variant={'outline'} size={'xs'} radius={'none'}>Edit</Button>],

        ],
    };
    return (

           <Flex flex={'1'} h={'100vh'} direction={'row'}>
               <Flex bg={''} w={'32%'} >
               </Flex>
               <Flex
                   gap="md"
                   direction="column"
                   px={'xl'} py={'md'}
                   flex={'1'}
                   bg={'gray.0'}
               >
                   <Flex align={'center'} justify={'space-between'}>
                       <Text fw={'bold'} size="xl">Patient Shifts</Text>
                       <Flex gap={'xs'}>
                           <Button radius={'none'}>Create New Shift</Button>
                           {/*<Button radius={'none'} variant={'light'}>Search By date</Button>*/}
                           <Input variant="filled" radius="" type={'date'} bg={'brand'} placeholder="Input component"/>
                       </Flex>
                   </Flex>

                   <Card  shadow={''}  padding="sm" radius="none">
                       <Flex direction={'column'} gap={'sm'}>
                           <Text size={'md'} c={'gray.7'} fw={'500'}>Morning Shift</Text>

                           <Table horizontalSpacing={'sm'} verticalSpacing={'xs'} data={tableData}/>
                       </Flex>
                   </Card>


               </Flex>
           </Flex>

    );
};
