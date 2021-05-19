import React from 'react';

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { create } from "jest-jasmine2/build/jasmine/jasmineLight";
import {instance} from 'enzyme'
import { node } from "enzyme";

describe('ProfileStatusWithHooks component', () => {
    test('Status from props should be in the state', () => {
        const component = node(<ProfileStatusWithHooks status={'hello'}/>)
        const instance = component.instance();
        expect(instance.state.status).toBe('hello')
    });
})