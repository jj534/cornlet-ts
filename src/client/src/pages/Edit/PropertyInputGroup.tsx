import React from 'react'
import { Input, Select } from 'src/components/formElements'
import { FormikIncrementor } from 'src/components/formikElements'
import { FlexColumn, Space } from 'src/components/layout'
import Text from 'src/components/text'
import useIsMobile from 'src/hooks/useIsMobile'
import { ListingDoc } from 'src/types'

interface PropertyInputGroupProps {
  register: any
  errors: any
  listing: ListingDoc
}

const PropertyInputGroup = ({ register, errors, listing }: PropertyInputGroupProps) => {
  const regionOptions = [
    {
      label: 'Belle Sherman',
      value: '1',
    },
    {
      label: 'Collegetown-Lower',
      value: '2',
    },
    {
      label: 'Collegetown-Upper',
      value: '3',
    },
    {
      label: 'Commons',
      value: '4',
    },
    {
      label: 'Downtown',
      value: '5',
    },
    {
      label: 'East Hill',
      value: '6',
    },
    {
      label: 'Fall Creek',
      value: '7',
    },
    {
      label: 'North Campus',
      value: '8',
    },
    {
      label: 'Northeast',
      value: '9',
    },
    {
      label: 'South Hill',
      value: '10',
    },
    {
      label: 'West Campus',
      value: '11',
    },
    {
      label: 'West Hill',
      value: '12',
    },
  ]

  const propertyTypeOptions = [
    {
      label: 'Apartment',
      value: '1',
    },
    {
      label: 'House',
      value: '2',
    },
    {
      label: 'Townhouse',
      value: '3',
    },
    {
      label: 'Condo',
      value: '4',
    },
  ]

  const furnishingOptions = [
    {
      label: 'Unfurnished',
      value: '1',
    },
    {
      label: 'Partially Furnished',
      value: '2',
    },
    {
      label: 'Fully Furnished',
      value: '3',
    },
  ]

  const isMobile = useIsMobile()

  return (
    <FlexColumn>
      <Text variant='h3'>Property</Text>
      <Space margin='1rem 0' />
      <Select
        name='regionCode'
        options={regionOptions}
        label='Region'
      />
      <Input
        name='rent'
        defaultValue={listing.rent}
        ref={register}
        error={errors.rent?.message}
      />
      <Space margin='.8rem 0' />
      <Select
        formik={formik}
        name='propertyTypeCode'
        options={propertyTypeOptions}
        label='Property Type'
      />
      <Space margin='.8rem 0' />
      <Select
        formik={formik}
        name='furnishingCode'
        options={furnishingOptions}
        label='Furnishing'
      />
      <Space margin='1rem 0' />
      <FormikIncrementor
        formik={formik}
        name='bedroomsTotal'
        label={
          isMobile
            ? `Bedrooms in the entire
          space`
            : 'Bedrooms in the entire space'
        }
        minValue={1}
      />
      <Space margin='.6rem 0' />
      <FormikIncrementor
        formik={formik}
        name='bedroomsAvailable'
        label={
          isMobile
            ? `Bedrooms available for
          sublet`
            : 'Bedrooms available for sublet'
        }
        minValue={1}
        maxValue={formik.values.bedroomsTotal}
      />
      <Space margin='.6rem 0' />
      <FormikIncrementor
        formik={formik}
        name='bathroomsTotal'
        label={
          isMobile
            ? `Bathrooms in the entire
          space`
            : 'Bathrooms in the entire space'
        }
        step={0.5}
        minValue={1}
      />
    </FlexColumn>
  )
}

export default PropertyInputGroup
